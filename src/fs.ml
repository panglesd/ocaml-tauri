let fs = Jv.get Jv.global "__Tauri__fs"
let fut_call ~ok = Utils.fut_call fs ~ok

type base_directory =
  | App
  | AppCache
  | AppConfig
  | AppData
  | AppLocalData
  | AppLog
  | Audio
  | Cache
  | Config
  | Data
  | Desktop
  | Document
  | Download
  | Executable
  | Font
  | Home
  | LocalData
  | Log
  | Picture
  | Public
  | Resource
  | Runtime
  | Temp
  | Template
  | Video

let base_directory_to_string = function
  | App -> "App"
  | AppCache -> "AppCache"
  | AppConfig -> "AppConfig"
  | AppData -> "AppData"
  | AppLocalData -> "AppLocalData"
  | AppLog -> "AppLog"
  | Audio -> "Audio"
  | Cache -> "Cache"
  | Config -> "Config"
  | Data -> "Data"
  | Desktop -> "Desktop"
  | Document -> "Document"
  | Download -> "Download"
  | Executable -> "Executable"
  | Font -> "Font"
  | Home -> "Home"
  | LocalData -> "LocalData"
  | Log -> "Log"
  | Picture -> "Picture"
  | Public -> "Public"
  | Resource -> "Resource"
  | Runtime -> "Runtime"
  | Temp -> "Temp"
  | Template -> "Template"
  | Video -> "Video"

type fs_option = { dir : base_directory option }

let make_fs_option ?dir () = { dir }
let ( let+ ) b a = Option.map a b
(* let ( let* ) b a = Option.bind b a *)

let jv_of_fs_options { dir } =
  let dir_field =
    let+ dir = dir in
    let key = base_directory_to_string dir in
    let bd = Jv.get fs "BaseDirectory" in
    let dir = (Jv.get bd) key in
    ("dir", dir)
  in
  let fields = List.filter_map Fun.id [ dir_field ] |> Array.of_list in
  Jv.obj fields

let copy_file ?options ~source ~destination () =
  let args =
    Utils.args
      [
        Some (Jv.of_jstr source);
        Some (Jv.of_jstr destination);
        Option.map jv_of_fs_options options;
      ]
  in
  fut_call ~ok:ignore "copyFile" args

type fs_dir_options = { dir : base_directory option; recursive : bool option }

let make_fs_dir_options ?dir ?recursive () = { dir; recursive }

let jv_of_fs_dir_options { dir; recursive } =
  let dir_field =
    let+ dir = dir in
    let key = base_directory_to_string dir in
    let bd = Jv.get fs "BaseDirectory" in
    let dir = (Jv.get bd) key in
    ("dir", dir)
  in
  let recursive_field =
    let+ recursive = recursive in
    let recursive = Jv.of_bool recursive in
    ("recursive", recursive)
  in
  let fields =
    List.filter_map Fun.id [ dir_field; recursive_field ] |> Array.of_list
  in
  Jv.obj fields

let create_dir ?options ~dir () =
  let args =
    Utils.args
      [ Some (Jv.of_jstr dir); Option.map jv_of_fs_dir_options options ]
  in
  fut_call ~ok:ignore "copyFile" args

let exists ?options ~path () =
  let args =
    Utils.args [ Some (Jv.of_jstr path); Option.map jv_of_fs_options options ]
  in
  fut_call ~ok:Jv.to_bool "copyFile" args

let read_binary_file ?options:_ ~file_path:_ () = failwith "TODO"

type file_entry = {
  children : file_entry list option;
  name : Jstr.t option;
  path : Jstr.t;
}

let jv_to_file_entry _entry =
  let entry = failwith "TODO" in
  ignore entry.children;
  ignore entry.name;
  ignore entry.path;
  failwith "to_implement"

let read_dir ?options ~dir () : file_entry list Fut.or_error =
  let args =
    Utils.args
      [ Some (Jv.of_jstr dir); Option.map jv_of_fs_dir_options options ]
  in
  fut_call ~ok:(Jv.to_list jv_to_file_entry) "readDir" args

let read_text_file ?options ~file_path () =
  let args =
    Utils.args
      [ Some (Jv.of_jstr file_path); Option.map jv_of_fs_options options ]
  in
  fut_call ~ok:Jv.to_jstr "readTextFile" args

let remove_dir ?options ~dir () =
  let args =
    Utils.args
      [ Some (Jv.of_jstr dir); Option.map jv_of_fs_dir_options options ]
  in
  fut_call ~ok:ignore "removeDir" args

let remove_file ?options ~file () =
  let args =
    Utils.args [ Some (Jv.of_jstr file); Option.map jv_of_fs_options options ]
  in
  fut_call ~ok:ignore "removeFile" args

let rename_file ?options ~old_path ~new_path () =
  let args =
    Utils.args
      [
        Some (Jv.of_jstr old_path);
        Some (Jv.of_jstr new_path);
        Option.map jv_of_fs_options options;
      ]
  in
  fut_call ~ok:ignore "renameFile" args

let write_binary_file ?options:_ ~path:_ ~contents:_ () = failwith "TODO"
(* fut_call ~ok:ignore "writeBinaryFile" [| path; contents; _ |] *)

let write_text_file ?options ~path ~contents () =
  let args =
    Utils.args
      [
        Some (Jv.of_jstr path);
        Some (Jv.of_jstr contents);
        Option.map jv_of_fs_options options;
      ]
  in
  fut_call ~ok:ignore "writeTextFile" args
