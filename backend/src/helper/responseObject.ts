const successResponse = (data: any) => {
  return { status: 'success', data: data };
};

const failureResponse = (errorMessage: any) => {
  return { status: 'fail', message: errorMessage };
};

export { successResponse, failureResponse };
