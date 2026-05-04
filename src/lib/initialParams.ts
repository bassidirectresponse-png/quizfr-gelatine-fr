// Captura os params da URL no momento do carregamento inicial.
// UTMify (async/defer) pode injetar params DEPOIS do carregamento do módulo,
// por isso fazemos polling por alguns segundos para capturar a versão mais completa.
let capturedParams = window.location.search;

const poll = setInterval(() => {
  const current = window.location.search;
  if (current.length > capturedParams.length) {
    capturedParams = current;
  }
}, 300);

setTimeout(() => clearInterval(poll), 5000);

/** Retorna os query params capturados no carregamento inicial (inclui UTMs do pixel) */
export function getInitialSearchParams(): string {
  return capturedParams;
}
