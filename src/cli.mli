module ArgMatch : sig
  type t

  include Jv.CONV with type t := t

  val occurrences : t -> int

  val value :
    t -> [ `Null | `Jstr of Jstr.t | `Bool of bool | `Jstrl of Jstr.t list ]
end
