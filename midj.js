const axios = require("axios");

class MIDJ {
  constructor(config = {}) {
    this.baseURL = config.baseURL || "https://api.midj.app";
    if (!config.authorization) {
      throw new Error("Authorization is required.");
    }
    this.authorization = config.authorization;
  }

  async generate(prompt) {
    try {
      const response = await axios.post(
        `${this.baseURL}/api/generate`,
        {
          prompt,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async Pregenerate(prompt) {
    try {
      const response = await axios.post(
        `${this.baseURL}/pre/generate`,
        {
          prompt,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { status: error.response.status, error: error.response.data };
    }
  }

  async getByTrigger(trigger_id) {
    try {
      const response = await axios.post(
        `${this.baseURL}/api/getByTrigger`,
        {
          trigger_id,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { status: error.response.status, error: error.response.data };
    }
  }

  async generateVariation(index, trigger_id, msg_hash) {
    try {
      const response = await axios.post(
        `${this.baseURL}/api/variation`,
        {
          index,
          trigger_id,
          msg_hash,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { status: error.response.status, error: error.response.data };
    }
  }

  async PregenerateVariation(index, trigger_id, msg_hash) {
    try {
      const response = await axios.post(
        `${this.baseURL}/pre/variation`,
        {
          index,
          trigger_id,
          msg_hash,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { status: error.response.status, error: error.response.data };
    }
  }

  async upscaleImage(index, trigger_id, msg_hash) {
    try {
      const response = await axios.post(
        `${this.baseURL}/api/upscale`,
        {
          index,
          trigger_id,
          msg_hash,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async PreupscaleImage(index, trigger_id, msg_hash) {
    try {
      const response = await axios.post(
        `${this.baseURL}/pre/upscale`,
        {
          index,
          trigger_id,
          msg_hash,
        },
        {
          headers: {
            Authorization: this.authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = MIDJ;
