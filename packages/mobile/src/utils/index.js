import Axios from 'axios';
import axiosHooks, {configure} from 'axios-hooks';

export const axios = Axios.create({
  baseURL: 'https://xperion-cms.herokuapp.com/',
});

export const useAxios = axiosHooks;

configure({axios});
