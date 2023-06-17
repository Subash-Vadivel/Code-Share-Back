const express = require("express");
const axios = require("axios");
exports.controllan = async (req, res) => {
  try {
    const { language, code, input } = req.body;
    const options = {
      method: "POST",
      url: "https://online-code-compiler.p.rapidapi.com/v1/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "266572d747msh12680302bc5ac18p11d425jsn85e431c9e73c",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      data: {
        language: language,
        version: "latest",
        code: code,
        input: input,
      },
    };
    try {
      const response = await axios.request(options);
      res.send(response.data);
    } catch (error) {
      console.log("Error:\n");
      console.error(error);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
