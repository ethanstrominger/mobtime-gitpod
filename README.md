# mobtimeplus

The mobtimeplus application was forked form the opensource "mobtime" timer here.  The creator and maintainer of this project is mrozzbarry.  
We love this app and decided to build our own that consolidates information into fewer tabs and adds certain capability.

jcssilberman and ethanstrominger are leads for mobtimeplus.

See https://docs.google.com/document/d/1x7Q7gj5T2reQHIb8eQARVer2ygMMT3j9ifAESlMUuVI/ for current information on mobtime plus.  We chose google docs over github for notes as google docs provides WYSIWYG and a less constrained viewing area when editing. 

# Original README

This README needs to be updated for mobtimeplus.

A websocket powered, collaborative mobbing timer.

On your desktop:

<p align="center">
  <img src="./docs/screenshot.png" width="30%" height="auto" />
</p>

And your phone:

<p align="center">
  <img src="./docs/screenshot-mobile.png" width="30%" height="auto" />
</p>

## Get up and running

```bash
yarn && yarn tailwind:dev && yarn start
```

### Environment Variables

| Name            | Description                      | Default Value      |
| --------------- | -------------------------------- | ------------------ |
| PORT            | Port number to run the server on | 4321               |

### Sharing from your local computer

#### Using ngrok

```bash
yarn global add ngrok

ngrok http 4321 # replace 4321 with the port you do
```

## Contributing

Bug reports and suggestions are welcome, just create an issue. PRs are welcome, too.

## License

It's under [MIT](./LICENSE.md).
