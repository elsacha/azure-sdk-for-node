// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819614\",\"not_before\":\"1459815714\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzE0LCJuYmYiOjE0NTk4MTU3MTQsImV4cCI6MTQ1OTgxOTYxNCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.VRl8H-HsNHA2pMXU-hO9oC0hthU7o9xZFDIEDnvv8aJDI0PYZ-OVKRyW0p_UzNN9HUzv5rTRhcNAuN9fkP-T_MqCHstv-hZg-e7WENCWDLmiiH5Ls3vrQUqGiJVromjfHltNW12IoAmQJilBZYJpe6QTP1SmOY_yrU_Bz6GJwcKCwAQbyL9_-rKOuom8yPULwMwLyMcnSuE7LlC2Kv-_eBd9eFNEc8qGUFOxnx6eNaKVcNV54b30IrQT-3WnD_dwlAEIYOKvZnAjKO02DXEcW9r_sld4oqo9Jbm9kmQ8yyJraYgW76sffTnweEt83b2C6YZx3SDvqWkLhl4KrRs8MQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '71e06eeb-321a-4996-9056-9f2dfcbbc419',
  'client-request-id': '310f36ce-a1b2-4930-95d7-0e34d7633d2a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_394',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:53 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819614\",\"not_before\":\"1459815714\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzE0LCJuYmYiOjE0NTk4MTU3MTQsImV4cCI6MTQ1OTgxOTYxNCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.VRl8H-HsNHA2pMXU-hO9oC0hthU7o9xZFDIEDnvv8aJDI0PYZ-OVKRyW0p_UzNN9HUzv5rTRhcNAuN9fkP-T_MqCHstv-hZg-e7WENCWDLmiiH5Ls3vrQUqGiJVromjfHltNW12IoAmQJilBZYJpe6QTP1SmOY_yrU_Bz6GJwcKCwAQbyL9_-rKOuom8yPULwMwLyMcnSuE7LlC2Kv-_eBd9eFNEc8qGUFOxnx6eNaKVcNV54b30IrQT-3WnD_dwlAEIYOKvZnAjKO02DXEcW9r_sld4oqo9Jbm9kmQ8yyJraYgW76sffTnweEt83b2C6YZx3SDvqWkLhl4KrRs8MQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '71e06eeb-321a-4996-9056-9f2dfcbbc419',
  'client-request-id': '310f36ce-a1b2-4930-95d7-0e34d7633d2a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_394',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:53 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '1f977219-7269-41d0-a014-f9f40e48b7e1',
  'x-ms-client-request-id': '9affe259-d85d-49aa-b4f5-46d26a832d71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '6152c388-956b-4e90-9738-cf0ccc74a6f8',
  'x-ms-routing-request-id': 'WESTUS:20160405T002656Z:6152c388-956b-4e90-9738-cf0ccc74a6f8',
  date: 'Tue, 05 Apr 2016 00:26:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??sdk-3-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '1f977219-7269-41d0-a014-f9f40e48b7e1',
  'x-ms-client-request-id': '9affe259-d85d-49aa-b4f5-46d26a832d71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '6152c388-956b-4e90-9738-cf0ccc74a6f8',
  'x-ms-routing-request-id': 'WESTUS:20160405T002656Z:6152c388-956b-4e90-9738-cf0ccc74a6f8',
  date: 'Tue, 05 Apr 2016 00:26:55 GMT',
  connection: 'close' });
 return result; }]];