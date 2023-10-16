
# MIDJ NPM Module

  

The MIDJ module provides a simple and efficient way to interact with the MIDJ API. Utilize the power of MIDJ with just a few lines of code in your Node.js application.

  

## Prerequisites

  

To use this module, you need to have a [midj.app subscription](https://midj.app/pricing).

## Features

- Generate content with `generate` method.

- Fetch content using the trigger ID with `getByTrigger` method.

- Generate variation of content with `generateVariation` method.

- Upscale images with `upscaleImage` method.

  

## Installation

  

To install the MIDJ module:

  

```bash

npm  install  @twozerotwo/midj

```

  

## Usage

  

Start by importing and initializing the MIDJ class:

  

```javascript

const  MIDJ  =  require('@twozerotwo/midj');

  

const  midj  =  new  MIDJ({

authorization: 'YOUR_AUTHORIZATION_TOKEN'

});

```

  

### Methods

## For Subscription Users

#### `generate(prompt)`

  

Generate content based on a provided prompt:

  

```javascript

midj.generate('Hello, world!').then(console.log);

```
  

#### `generateVariation(index, trigger_id, msg_hash)`

  

Generate a variation of content:

  

```javascript

midj.generateVariation(1, trigger_id_here, 'msg_hash_here').then(console.log);

```

  

#### `upscaleImage(index, trigger_id, msg_hash)`

  

Upscale an image:

  

```javascript

midj.upscaleImage(1, trigger_id_here, 'msg_hash_here').then(console.log);

```

## For Pre-paid Users

#### `Pregenerate(prompt)`

  

Generate content based on a provided prompt:

  

```javascript

midj.Pregenerate('Hello, world!').then(console.log);

```
  

#### `PregenerateVariation(index, trigger_id, msg_hash)`

  

Generate a variation of content:

  

```javascript

midj.PregenerateVariation(1, trigger_id_here, 'msg_hash_here').then(console.log);

```

  

#### `PreupscaleImage(index, trigger_id, msg_hash)`

  

Upscale an image:

  

```javascript

midj.PreupscaleImage(1, trigger_id_here, 'msg_hash_here').then(console.log);

```

## Common API

  #### `getByTrigger(trigger_id)`

  

Fetch generated content by its trigger ID:

  

```javascript

midj.getByTrigger(trigger_id_here).then(console.log);

```

## Configuration

  

The `MIDJ` constructor accepts a configuration object:

  

```javascript

const  config  = {

baseURL: 'https://api.midj.app', // Optional. This is the default.

authorization: 'YOUR_AUTHORIZATION_TOKEN'  // Required.

};

  

const  midj  =  new  MIDJ(config);

```

  

> ⚠️ Always keep your authorization token secret. Do not expose it in client-side code.

  

## Error Handling

  

All methods return an error object in case of any issues:

  

```javascript

const  response  =  await  midj.generate('Hello, world!');

  

if (response.error) {

console.error('Error:', response.error);

} else {

console.log('Generated Content:', response);

}

```

  

## Contributing

  

For any bugs or feature requests, please open an issue on GitHub.