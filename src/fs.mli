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

type fs_option

val make_fs_option : ?dir:base_directory -> unit -> fs_option

val copy_file :
  ?options:fs_option ->
  source:Jstr.t ->
  destination:Jstr.t ->
  unit ->
  unit Fut.or_error

type fs_dir_options

val make_fs_dir_options :
  ?dir:base_directory -> ?recursive:bool -> unit -> fs_dir_options

val create_dir :
  ?options:fs_dir_options -> dir:Jstr.t -> unit -> unit Fut.or_error

val exists : ?options:fs_option -> path:Jstr.t -> unit -> bool Fut.or_error

val read_binary_file : ?options:'a -> file_path:'b -> unit -> 'c
(** Unimplemented *)

type file_entry

val read_dir :
  ?options:fs_dir_options -> dir:Jstr.t -> unit -> file_entry list Fut.or_error
(** Unimplemented *)

val read_text_file :
  ?options:fs_option -> file_path:Jstr.t -> unit -> Jstr.t Fut.or_error

val remove_dir :
  ?options:fs_dir_options -> dir:Jstr.t -> unit -> unit Fut.or_error

val remove_file : ?options:fs_option -> file:Jstr.t -> unit -> unit Fut.or_error

val rename_file :
  ?options:fs_option ->
  old_path:Jstr.t ->
  new_path:Jstr.t ->
  unit ->
  unit Fut.or_error

val write_binary_file : ?options:'a -> path:'b -> contents:'c -> unit -> 'd
(** Unimplemented *)

val write_text_file :
  ?options:fs_option ->
  path:Jstr.t ->
  contents:Jstr.t ->
  unit ->
  unit Fut.or_error
