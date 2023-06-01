interface NxStatic {
  $set: (inKey: any, inValue?: any) => void;
  $get: (inKey?: string, inDefault?: any) => any;
  $rootState: any;
  $rootStore: any;
  $app: any;
  $pin: any;
  $call: (inName: string, ...args: any[]) => Function;
  $query: (inKey?: string, inDefault?: Function) => any;
  $map: (inArray: string[]) => Record<string, Function>;
  $useStore: (inStores: Record<string, () => any>) => void;
}
