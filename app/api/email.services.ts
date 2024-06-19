import api from "./api.services";
function EmailServices() {

  const contactUs = (payload: Record<string, string >) => {
    return api.post("/email/contact-us", payload);
  };


  return {
    contactUs
  };
}
export default EmailServices;
