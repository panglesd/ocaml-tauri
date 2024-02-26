let app = Jv.get Jv.global "__Tauri__app"
let fut_call ~ok meth = Utils.fut_call app ~ok meth [||]
let get_name () = fut_call ~ok:Jv.to_jstr "getName"
let get_tauri_version () = fut_call ~ok:Jv.to_jstr "getTauriVersion"
let get_version () = fut_call ~ok:Jv.to_jstr "getVersion"
let hide () = fut_call ~ok:ignore "hide"
let show () = fut_call ~ok:ignore "show"
