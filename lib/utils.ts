import 'reflect-metadata';

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function findBy(selector: string) {
  return (target: any, propertyKey: string) => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          const promise = (this as any).browser.findElement(selector);
          return new type(promise, selector);
        },
    });
  };
}


export function findByxpath(selector: string) {
  console.log('findByxpath');
  return (target: any, propertyKey: string) => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          const promise = (this as any).browser.findElementByXPath(selector);
          return new type(promise, selector);
        },
    });
  };
}