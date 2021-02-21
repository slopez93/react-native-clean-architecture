import {injectable} from 'inversify';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {BASE_URL} from '../config/constants';

export interface HttpManager {
  get(url: string): Promise<any>;
}

@injectable()
export class HttpManagerImpl implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
    this.http.interceptors.request.use(this._handleRequest);
    this.http.interceptors.response.use(this._handleSuccess, this._handleError);
  }

  get(url: string): Promise<AxiosResponse> {
    return this.http.get(url);
  }

  private _handleRequest = async (
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> => {
    // config.headers.Authorization = ''; // Put token if needed authorization
    return config;
  };

  private _handleSuccess = async (response: AxiosResponse) => {
    return response.data;
  };

  private _handleError = async (error: AxiosError) => {
    return Promise.reject(error);
  };
}
