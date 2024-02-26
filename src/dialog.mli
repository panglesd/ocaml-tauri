val ask :
  ?cancel_label:Jstr.t ->
  ?ok_label:Jstr.t ->
  ?title:Jstr.t ->
  ?type_:[< `Error | `Info | `Warning ] ->
  Jstr.t ->
  bool Fut.or_error

val confirm :
  ?cancel_label:Jstr.t ->
  ?ok_label:Jstr.t ->
  ?title:Jstr.t ->
  ?type_:[< `Error | `Info | `Warning ] ->
  Jstr.t ->
  bool Fut.or_error

val message :
  ?ok_label:Jstr.t ->
  ?title:Jstr.t ->
  ?type_:[< `Error | `Info | `Warning ] ->
  Jstr.t ->
  unit Fut.or_error

type dialog_filter

val make_dialog_filter :
  ?extensions:Jstr.t list -> ?name:Jstr.t -> unit -> dialog_filter

val open_ :
  ?default_path:Jstr.t ->
  ?directory:bool ->
  ?filters:dialog_filter list ->
  ?multiple:bool ->
  ?recursive:bool ->
  ?title:Jstr.t ->
  unit ->
  Jstr.t list Fut.or_error

val save :
  ?default_path:Jstr.t ->
  ?filters:dialog_filter list ->
  ?title:Jstr.t ->
  unit ->
  Jstr.t option Fut.or_error
