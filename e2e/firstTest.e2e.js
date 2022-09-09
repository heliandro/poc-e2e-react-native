

describe('Minha suit de testes E2E', () => {
  let sleep;

  beforeAll(async () => {
    await device.launchApp();

    sleep = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 5000)
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await sleep();
  });

  it('Deve apresentar o titulo da secao', async () => {
    await expect(element(by.id("titulo"))).toBeVisible();
    const titulo = element(by.text("Testes E2E"));
    await expect(titulo).toBeVisible();
  });

  it('Deve apresentar a pagina Sobre apos clicar no botao', async () => {
    await element(by.id('botao_sobre')).tap();
    await sleep();
    await expect(element(by.text('Pagina Sobre'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
