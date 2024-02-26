let fut_call g ~ok meth args =
  let res = Jv.call g meth args in
  Fut.of_promise ~ok res

let to_options l =
  let fields =
    List.filter_map
      (function _, None -> None | fname, Some v -> Some (fname, v))
      l
    |> Array.of_list
  in
  Jv.obj fields

let args a = List.filter_map Fun.id a |> Array.of_list
