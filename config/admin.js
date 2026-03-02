module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'temp-admin-secret-change-this'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'temp-api-salt-change-this'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'temp-transfer-salt-change-this'),
    },
  },
});
