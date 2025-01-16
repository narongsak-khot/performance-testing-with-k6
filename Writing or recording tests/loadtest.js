// Creator: Grafana k6 Browser Recorder 1.0.6

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group(
    'page_1 - https://admin-oapi-portal-sit.arisetech.dev/manage-partner/manage-partner-profile/?partnerAccountRefId=3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
    function () {
      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/rm-email-list',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/rm-email-list',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': 'b47eb10d-d480-422d-b6f5-6c61a110e0ad',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-setting',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-setting',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': 'b47eb10d-d480-422d-b6f5-6c61a110e0ad',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://extgw-oapi-pf-sit.arisetech.dev/realms/admin/protocol/openid-connect/userinfo',
        {
          headers: {
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.options(
        'https://extgw-oapi-pf-sit.arisetech.dev/realms/admin/protocol/openid-connect/userinfo',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://admin-oapi-portal-sit.arisetech.dev/_next/static/chunks/840-43d1151b8680876c.js',
        {
          headers: {
            referer:
              'https://admin-oapi-portal-sit.arisetech.dev/manage-partner/manage-partner-profile/?partnerAccountRefId=3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://admin-oapi-portal-sit.arisetech.dev/_next/static/chunks/pages/manage-partner/edit-product-settings/pay-with-paotang/%5BpartnerAccountRefId%5D-8c10901e4c154b89.js',
        {
          headers: {
            referer:
              'https://admin-oapi-portal-sit.arisetech.dev/manage-partner/manage-partner-profile/?partnerAccountRefId=3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://admin-oapi-portal-sit.arisetech.dev/_next/static/css/67af36ff8e671a62.css',
        {
          headers: {
            referer:
              'https://admin-oapi-portal-sit.arisetech.dev/manage-partner/manage-partner-profile/?partnerAccountRefId=3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
    }
  )

  group(
    'page_2 - https://admin-oapi-portal-sit.arisetech.dev/manage-partner/edit-product-settings/pay-with-paotang/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/',
    function () {
      response = http.get(
        'https://admin-oapi-portal-sit.arisetech.dev/imgs/favicon/favicon-32x32.png',
        {
          headers: {
            referer:
              'https://admin-oapi-portal-sit.arisetech.dev/manage-partner/edit-product-settings/pay-with-paotang/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': '60783e2d-bf3a-4f16-b856-43fadc981c2f',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://extgw-oapi-pf-sit.arisetech.dev/realms/admin/protocol/openid-connect/userinfo',
        {
          headers: {
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.patch(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/product-pwp',
        '{"isActive":true,"requesterDetail":{"requesterName":"nasoft","requesterEmail":"narongsak.k@arise.tech","requestedDate":"2025-01-13T17:00:00.000Z","reason":"Test"}}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            'content-type': 'application/json',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': '3a624e33-1855-4959-a2db-2ce09d9a7b8d',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/product-pwp',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,content-type,x-request-id',
            'access-control-request-method': 'PATCH',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
    }
  )

  group(
    'page_3 - https://admin-oapi-portal-sit.arisetech.dev/manage-partner/manage-partner-profile/?partnerAccountRefId=3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
    function () {
      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-dashboard',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': 'a49f5548-e760-405a-be2c-275666b366d7',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': 'a49f5548-e760-405a-be2c-275666b366d7',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-dashboard',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-setting',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-request-id': 'a49f5548-e760-405a-be2c-275666b366d7',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      response = http.options(
        'https://extgw-admin-oapi-portal-sit.arisetech.dev/v1/admin/partner-account/3cf976bc-2f29-477e-bf26-f034c7f2e9b4/partner-setting',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization,x-request-id',
            'access-control-request-method': 'GET',
            origin: 'https://admin-oapi-portal-sit.arisetech.dev',
            'sec-fetch-mode': 'cors',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://extgw-oapi-pf-sit.arisetech.dev/realms/admin/protocol/openid-connect/userinfo',
        {
          headers: {
            referer: 'https://admin-oapi-portal-sit.arisetech.dev/',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqRFR4Y19EaWtzQWNIRlJWUVRQNFBOaGFwRGRXTkxCd1BDcDBKSUs3VFI0In0.eyJleHAiOjE3MzY4NjUyMzIsImlhdCI6MTczNjgyMjAzMywiYXV0aF90aW1lIjoxNzM2ODIyMDMyLCJqdGkiOiI1OTIwMDQwMi1iMjU2LTRlNGItOTY2MC1iYWI4ZDI5NmMyOWMiLCJpc3MiOiJodHRwczovL2V4dGd3LW9hcGktcGYtc2l0LmFyaXNldGVjaC5kZXYvcmVhbG1zL2FkbWluIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6Ijc5NTgzMDgwLTNlZjItNGRlYS04M2ZhLTRmZTc3NWQzNTljNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InBvcnRhbC1hZG1pbi1jbGllbnQiLCJub25jZSI6ImYxNzg2YmM0LTM1NjAtNGRlYi1hNzM2LWFmZmFiNzU0ZmEyOCIsInNlc3Npb25fc3RhdGUiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hZG1pbiIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyB1c2VyX2luZm8gdXNlciB1c2VyX3JvbGUiLCJzaWQiOiI3NmVhMTU5ZS1jZWM3LTQ0ZDktYjFlZS01YWZjNjFlZWZjZmQiLCJ1c2VyX3JvbGUiOiJTVVBFUl9BRE1JTiIsImFkbWluX3VzZXJfcmVmX2lkIjoiMWEzNGI3NWEtNDlmMS00YTI2LTg1MGUtN2VkOTQyNDAxMDkwIn0.qNdT4bhbiko1C_wQnhCxf7lM5LA5NkXN9XmZ_jtCZSN8tbe9uTNtjotvjkIBtR8rpCkuCgYkM4x2GAS012DLIbVDbh62dvEClYyUKXEQOJL27C417CBe1p4sCe0IgG2R5E_oPiVbmZ2BIphNekgsy1ZjYuRtpz95rYqkuxGPmHLdYmefXOjpzeRniSulCAE0mj7ZJ0zpemDOjZo6S0r_VNDEnA4-efP_mFs90S1A4sTWEkb8UbZmxjL7MamtQa273pMtYg1RaqCUePDVvHMlTHTy71rwb-he3Xsa3Ksp-AY1ALERGmOm1pKa421NTE2kcUkhCCYwnF5ti3Qh5iKvnQ',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
