const debugLib = require('debug');
const nodeFetch = require('node-fetch');
const path = require('path');

const debug = debugLib('test');
const baseUrl = `http://127.0.0.1:8360/`;
const adminToken = '';

const fetchGet = async(pa, param = {}, token = adminToken) => {
  return nodeFetch(baseUrl + pa + '?' + new URLSearchParams(param), {
    method: 'get',
    headers: {Authorization: token}
  }).then(res => res.json());
};

const fetchPost = async(path, param = {}, token = adminToken) => {
  return nodeFetch(baseUrl + path, {
    method: 'post',
    headers: {'Content-Type': 'application/json', Authorization: token},
    body: JSON.stringify(param)
  }).then(res => res.json());
};

require(path.join(process.cwd(), 'test/entry/controller.entry.js'));
beforeAll(async() => {
  think.app.on('appReady', () => {
    console.log('--开始测试--');
  });
});

module.exports = {fetchGet, fetchPost, debug};
