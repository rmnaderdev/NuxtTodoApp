export default defineNuxtPlugin((nuxtApp) => {

  return {
    provide: {
      sayHelloPlugin: (message: string) => console.log('Hello from myPlugin!', message)
    }
  }

})
