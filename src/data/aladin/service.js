import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export const getAladinBooks = async (title) => {
  try {
    const { data } = await axios.get(
      `/api/?ttbkey=${apiKey}&Query=${title}&QueryType=Keyword&MaxResults=100&start=1&SearchTarget=Book&CategoryId=8257&output=js&Version=20131101`
    );
    console.log("[SUCCESS] GET ALADIN BOOKS");
    return data;
  } catch (error) {
    console.log(error);
  }
};
