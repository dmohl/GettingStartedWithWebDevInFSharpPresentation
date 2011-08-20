
open System 
open System.Runtime.InteropServices 
open System.Runtime.CompilerServices 


[<ComImport>] 
[<InterfaceType(ComInterfaceType.InterfaceIsIUnknown)>] 
[<Guid("BD39D1D2-BA2F-486A-89B0-B4B0CB466891")>] 
type ICLRRuntimeInfo = 
    // vtable slots 
    abstract xGetVersionString : unit -> unit 
    abstract xGetRuntimeDirectory : unit -> unit 
    abstract xIsLoaded : unit -> unit 
    abstract xIsLoadable : unit -> unit 
    abstract xLoadErrorString : unit -> unit 
    abstract xLoadLibrary : unit -> unit 
    abstract xGetProcAddress : unit -> unit 
    abstract xGetInterface : unit -> unit 
    abstract xSetDefaultStartupFlags : unit -> unit 
    abstract xGetDefaultStartupFlags : unit -> unit 

    [<MethodImpl(MethodImplOptions.InternalCall, MethodCodeType=MethodCodeType.Runtime)>] 
    abstract BindAsLegacyV2Runtime : unit -> unit 

let rtInfo = RuntimeEnvironment.GetRuntimeInterfaceAsObject(Guid.Empty,typeof<ICLRRuntimeInfo>.GUID) :?> ICLRRuntimeInfo            
rtInfo.BindAsLegacyV2Runtime() 
