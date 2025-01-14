declare interface AminLogin {
  username: string | null;
  password: string | null;
}
declare interface AdminConfig {
  username: string | null;
  password: string | null;
  new_password: string | null;
  captcha_site_key: string | null;
  captcha_secret_key: string | null;
  default_configs: object | null;
  default_traffic: number | null;
}
declare type OcservConfigItems = {
  label: string;
  model: string;
  type?: string;
  rules?: string | Array<Function> | null;
  items?: Array<object> | null;
};
declare interface Config {
  captcha_site_key: string | null;
  config: boolean;
  token?: string;
}
declare interface Dashboard {
  online_users: Array<object>;
  show_status: string;
  show_iroutes: Array<object>;
}
declare interface OcservUser {
  id?: number | null;
  group: number | null;
  group_name: string | null | undefined;
  online: boolean | null | undefined;
  username: string | null;
  password: string | null;
  active: boolean;
  create?: string | null;
  expire_date: string | null;
  desc: string | null;
  traffic: number;
  default_traffic: number;
  tx?: number | null;
  rx?: number | null;
}
declare interface UserPagination {
  result: Array<OcservUser | null>;
  page: number;
  pages: number;
  total_count?: number;
}
declare interface OcservGroup {
  id?: number | null;
  name: string | null;
  desc: string | null;
  configs: object | null;
}
declare interface GroupPagination {
  result: Array<OcservGroup | null>;
  page: number;
  pages: number;
  total_count?: number;
}
declare interface Occtl {
  show_status: string;
  online_users: Array<object>;
  show_iroutes: Array<object>;
}

declare interface ResultData {
  [key: string]: {
    total_rx: number;
    total_tx: number;
  };
}

declare interface Stats {
  total: object;
  result: ResultData;
  months: Array<string>;
  current_month: object;
}

declare interface URLParams {
  [key: string]: string | number;
}

export {
  AminLogin,
  AdminConfig,
  OcservConfigItems,
  Config,
  Dashboard,
  OcservUser,
  UserPagination,
  OcservGroup,
  GroupPagination,
  Occtl,
  Stats,
  URLParams,
};
