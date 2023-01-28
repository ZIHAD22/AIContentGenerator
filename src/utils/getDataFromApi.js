const getDataFromApi = async (topic) => {
    const { Configuration, OpenAIApi } = require("openai");

    console.log(process.env.REACT_APP_OPEN_AI_KEY);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPEN_AI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please Tell Me large about ${topic}`,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response
}

export default getDataFromApi