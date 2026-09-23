#include <iostream>
#include <string>

using namespace std;

int main() {
    // Arreglo tridimensional de abarrotes: [2 Sucursales][2 Categorias][3 Productos]
    // Primer índice: Sucursal (0: Centro, 1: Norte)
    // Segundo índice: Categoría (0: Lácteos, 1: Enlatados)
    // Tercer índice: Producto específico
    string abarrotes[2][2][3] = {
        { // Sucursal 0 (Centro)
            {"Leche", "Queso", "Yogur"},       // Categoría 0 (Lácteos)
            {"Atun", "Frijoles", "Elote"}       // Categoría 1 (Enlatados)
        },
        { // Sucursal 1 (Norte)
            {"Crema", "Mantequilla", "Suero"},   // Categoría 0 (Lácteos)
            {"Sardinas", "Chiles", "Tomate"}    // Categoría 1 (Enlatados)
        }
    };

    // --- BÚSQUEDA INTERACTIVA MEDIANTE CICLOS ANIDADOS ---
    string productoBuscado;
    bool encontrado = false;

    cout << "=== CONSULTA DE INVENTARIO DE ABARROTES ===" << endl;
    cout << "Ingrese el nombre del producto a buscar: ";
    cin >> productoBuscado;

    // Tres ciclos 'for' para recorrer las 3 dimensiones del arreglo
    for (int sucursal = 0; sucursal < 2; sucursal++) {
        for (int categoria = 0; categoria < 2; categoria++) {
            for (int producto = 0; producto < 3; producto++) {
                
                // Compración del elemento actual con el buscado
                if (abarrotes[sucursal][categoria][producto] == productoBuscado) {
                    cout << "\n[!] Producto encontrado en el arreglo:" << endl;
                    cout << "- Sucursal (Índice 1): " << sucursal << endl;
                    cout << "- Categoria (Índice 2): " << categoria << endl;
                    cout << "- Producto  (Índice 3): " << producto << endl;
                    cout << "Posición en código: abarrotes[" << sucursal << "][" << categoria << "][" << producto << "]" << endl;
                    
                    encontrado = true;
                    break; // Sale del ciclo de productos
                }
            }
        }
    }

    if (!encontrado) {
        cout << "\nEl producto '" << productoBuscado << "' no se encuentra en el inventario." << endl;
    }

    // --- CONSULTA DIRECTA (Al igual que tu ejemplo base) ---
    cout << "\nProducto consultado directamente (abarrotes[0][1][0]): ";
    cout << abarrotes[0][1][0] << endl; // Imprime: Atun

    return 0;
}