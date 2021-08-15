function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("Jake"); // 직접 타입 지정
helloBasic(33); // 타입 추론
