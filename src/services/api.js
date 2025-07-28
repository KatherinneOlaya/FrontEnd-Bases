const BASE_URL = 'http://localhost:3001'; // URL de tu backend

export async function fetchVentas24h() {
  const res = await fetch(`${BASE_URL}/ventas-24h`);
  if (!res.ok) throw new Error('Error en /ventas-24h');
  return await res.json();
}

export async function fetchOrdenesRecientes() {
  const res = await fetch(`${BASE_URL}/ordenes-recientes`);
  if (!res.ok) throw new Error('Error en /ordenes-recientes');
  return await res.json();
}




export async function fetchGastos30d() {
  const res = await fetch(`${BASE_URL}/gastos-30d`);
  if (!res.ok) throw new Error('Error en /gastos-30d');
  return res.json();
}
