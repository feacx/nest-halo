import { HttpException, HttpStatus } from '@nestjs/common';

export const Exception = (code: number, text: string) => {
  throw new HttpException(
    {
      error: text,
      status: HttpStatus.FORBIDDEN,
    },
    code,
  );
};
