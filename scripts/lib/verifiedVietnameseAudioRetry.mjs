function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function synthesizeWithRetry(synthesize, {
  attempts = 3,
  retryDelayMs = 750,
  onRetry,
} = {}) {
  if (!Number.isInteger(attempts) || attempts < 1) {
    throw new Error('Số lần tạo audio phải lớn hơn hoặc bằng 1.');
  }

  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await synthesize();
    } catch (error) {
      lastError = error;
      if (attempt === attempts) throw error;
      onRetry?.({ attempt, attempts, error });
      if (retryDelayMs > 0) await wait(retryDelayMs * attempt);
    }
  }

  throw lastError;
}
