const awsmobile = {
  aws_project_region: process.env.VUE_APP_AWS_PROJECT_REGION,
  aws_cognito_region: process.env.VUE_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.VUE_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.VUE_APP_USER_POOLS_WEB_CLIENT_ID,
  oauth: {}
};

module.exports = awsmobile;
