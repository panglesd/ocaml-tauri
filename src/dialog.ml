let dialog = Jv.get Jv.global "__Tauri__dialog"
let fut_call ~ok = Utils.fut_call dialog ~ok
let to_options = Utils.to_options

let type_to_jv = function
  | `Info -> Jv.of_string "info"
  | `Warning -> Jv.of_string "warning"
  | `Error -> Jv.of_string "error"

let ask ?cancel_label ?ok_label ?title ?type_ message =
  let confirm_dialog_options =
    to_options
      [
        ("cancelLabel", Option.map Jv.of_jstr cancel_label);
        ("okLabel", Option.map Jv.of_jstr ok_label);
        ("title", Option.map Jv.of_jstr title);
        ("type", Option.map type_to_jv type_);
      ]
  in
  fut_call ~ok:Jv.to_bool "ask" [| Jv.of_jstr message; confirm_dialog_options |]

let confirm ?cancel_label ?ok_label ?title ?type_ message =
  let confirm_dialog_options =
    to_options
      [
        ("cancelLabel", Option.map Jv.of_jstr cancel_label);
        ("okLabel", Option.map Jv.of_jstr ok_label);
        ("title", Option.map Jv.of_jstr title);
        ("type", Option.map type_to_jv type_);
      ]
  in
  fut_call ~ok:Jv.to_bool "confirm"
    [| Jv.of_jstr message; confirm_dialog_options |]

let message ?ok_label ?title ?type_ m =
  let message_dialog_options =
    to_options
      [
        ("okLabel", Option.map Jv.of_jstr ok_label);
        ("title", Option.map Jv.of_jstr title);
        ("type", Option.map type_to_jv type_);
      ]
  in
  fut_call ~ok:ignore "message" [| Jv.of_jstr m; message_dialog_options |]

type dialog_filter = { extensions : Jstr.t list option; name : Jstr.t option }

let make_dialog_filter ?extensions ?name () = { extensions; name }

let jv_of_filters filters =
  to_options
    [
      ("extensions", Option.map (Jv.of_list Jv.of_jstr) filters.extensions);
      ("name", Option.map Jv.of_jstr filters.name);
    ]

let open_ ?default_path ?directory ?filters ?multiple ?recursive ?title () =
  let open_dialog_options =
    to_options
      [
        ("defaultPath", Option.map Jv.of_jstr default_path);
        ("directory", Option.map Jv.of_bool directory);
        ("filters", Option.map (Jv.of_list jv_of_filters) filters);
        ("multiple", Option.map Jv.of_bool multiple);
        ("recursive", Option.map Jv.of_bool recursive);
        ("title", Option.map Jv.of_jstr title);
      ]
  in
  let ok res =
    if Jv.strict_equal Jv.null res then []
    else if Jstr.equal (Jv.typeof res) (Jstr.v "string") then [ Jv.to_jstr res ]
    else Jv.to_jstr_list res
  in
  fut_call ~ok "open" [| open_dialog_options |]

let save ?default_path ?filters ?title () =
  let open_dialog_options =
    to_options
      [
        ("defaultPath", Option.map Jv.of_jstr default_path);
        ("filters", Option.map (Jv.of_list jv_of_filters) filters);
        ("title", Option.map Jv.of_jstr title);
      ]
  in
  let ok res =
    if Jv.strict_equal Jv.null res then None else Some (Jv.to_jstr res)
  in
  fut_call ~ok "save" [| open_dialog_options |]
