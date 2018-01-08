//configuration object

const PORT = 4009;
const BASEURL = `http://127.0.0.1:${PORT}`;

const config = {
  loginUrl: `${BASEURL}/api/user/authenticate`,
  registerUrl: `${BASEURL}/api/user/create`
}

export default config
