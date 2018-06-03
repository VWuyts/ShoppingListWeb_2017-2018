import { Injectable } from '@angular/core';
import { Product } from '../list/product';

@Injectable()
export class ProductService {
  products: Product[] = [
    {id: 1, name: 'Abrikozen', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 2, name: 'Ananas', category: 'Fruit', unit: 'stuk', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 3, name: 'Appelen', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 4, name: 'Bananen', category: 'Fruit', unit: 'tros', image: 'bananen.png', note: 'Fair trade', shop: 'Delhaize',
      isFixedShop: true},
    {id: 5, name: 'Blauwbessen', category: 'Fruit', unit: 'bakje', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 6, name: 'Citroen', category: 'Fruit', unit: 'stuk', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 7, name: 'Clementines', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 8, name: 'Druiven', category: 'Fruit', unit: 'tros', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 9, name: 'Frambozen', category: 'Fruit', unit: 'bakje', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 10, name: 'Kersen', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 11, name: 'Kiwi', category: 'Fruit', unit: 'stuk', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 12, name: 'Kruisbessen', category: 'Fruit', unit: 'bakje', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 13, name: 'Limoen', category: 'Fruit', unit: 'stuk', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 14, name: 'Mandarijn', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 15, name: 'Nectarines', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 16, name: 'Peren', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 17, name: 'Perziken', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 18, name: 'Pompelmoes', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 19, name: 'Pruimen', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 20, name: 'Sinaasappel', category: 'Fruit', unit: 'kg', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 21, name: 'Aardappelen', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 22, name: 'Asperges', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 23, name: 'Aubergine', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 24, name: 'Champignons', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 25, name: 'Gele paprika', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 26, name: 'Groene Asperges', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 27, name: 'Groene paprika', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 28, name: 'Groene selder', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 29, name: 'Knoflook', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 30, name: 'Komkommer', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 31, name: 'Koolrabi', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 32, name: 'Maïs', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 33, name: 'Paprika', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 34, name: 'Pompoen', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 35, name: 'Prei', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 36, name: 'Radijsjes', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 37, name: 'Rode biet', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 38, name: 'Rode paprika', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 39, name: 'Selder', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 40, name: 'Sla', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 41, name: 'Spinazie', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 42, name: 'Tomaten', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 43, name: 'Uien', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 44, name: 'Venkel', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 45, name: 'Witte selder', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 46, name: 'Wortelen', category: 'Groenten', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 47, name: 'Biefstuk', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 48, name: 'Cordon blue', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 49, name: 'Eendenborst', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 50, name: 'Gehakt', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 51, name: 'Kalfslapje', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 52, name: 'Kalfsschnitzel', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 53, name: 'Kalkoenfilet', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 54, name: 'Kipfilet', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 55, name: 'Kippenbil', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 56, name: 'Kippenschnitzel', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 57, name: 'Kippenworst', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 58, name: 'Konijn', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 59, name: 'Kotelet', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 60, name: 'Lamskotelet', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 61, name: 'Lamskroon', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 62, name: 'Paardensteak', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 63, name: 'Saté', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 64, name: 'Schnitzel', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 65, name: 'Varkenslapje', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 66, name: 'Worst', category: 'Vlees', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 67, name: 'Brasem', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 68, name: 'Forel', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 69, name: 'Garnalen', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 70, name: 'Gerookte makreel', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 71, name: 'Gerookte zalm', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 72, name: 'Haring', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 73, name: 'Kabeljauw', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 74, name: 'Kreeft', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 75, name: 'Maatjes', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 76, name: 'Makreel', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 77, name: 'Mosselen', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 78, name: 'Oesters', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 79, name: 'Rog', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 80, name: 'Schol', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 81, name: 'Tong', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 82, name: 'Tonijn', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 83, name: 'Zalm', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 84, name: 'Zeebaars', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 85, name: 'Zeewolf', category: 'Vis', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 86, name: 'Beemster', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 87, name: 'Belegen kaas blok', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 88, name: 'Belegen kaas sneden', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 89, name: 'Brie', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 90, name: 'Comté', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 91, name: 'Emmental', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 92, name: 'Feta', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 93, name: 'Geitenkaas', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 94, name: 'Geraspte kaas', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 95, name: 'Gorgonzola', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 96, name: 'Gouda', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 97, name: 'Gruyère', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 98, name: 'Jonge kaas blok', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 99, name: 'Jonge kaas sneden', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 100, name: 'Kruidenkaas', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 101, name: 'Mascarpone', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 102, name: 'Mozzarella', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 103, name: 'Oude kaas blok', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 104, name: 'Oude kaas sneden', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 105, name: 'Parmezaan', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 106, name: 'Plattekaas', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 107, name: 'Ricotta', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 108, name: 'Roquefort', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 109, name: 'Smeerkaas', category: 'Kaas', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 110, name: 'Amandelmelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 111, name: 'Boter', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 112, name: 'Chocomelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 113, name: 'Chocomousse', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 114, name: 'Culinaire room', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 115, name: 'Drinkyoghurt', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 116, name: 'Eieren', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 117, name: 'Fruityoghurt', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 118, name: 'Griekse yoghurt', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 119, name: 'Halfvolle melk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 120, name: 'Havermelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 121, name: 'Hoeveboter', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 122, name: 'Karnemelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 123, name: 'Magere melk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 124, name: 'Magere yoghurt', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 125, name: 'Margarine', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 126, name: 'Melk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 127, name: 'Pudding', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 128, name: 'Rijstmelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 129, name: 'Rijstpap', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 130, name: 'Room', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 131, name: 'Slagroom', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 132, name: 'Sojamelk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 133, name: 'Sojaroom', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 134, name: 'Tiramisu', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 135, name: 'Volle melk', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 136, name: 'Yoghurt', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 137, name: 'Zure room', category: 'Zuivel', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 138, name: 'Arborio rijst', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 139, name: 'Basmatirijst', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 140, name: 'Boekweit', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 141, name: 'Bulgur', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 142, name: 'Cappellini', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 143, name: 'Couscous', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 144, name: 'Gnocchi', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 145, name: 'Lasagne', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 146, name: 'Noedels', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 147, name: 'Pasta', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 148, name: 'Penne', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 149, name: 'Quinoa', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 150, name: 'Rijst', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 151, name: 'Rode rijst', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 152, name: 'Spaghetti', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 153, name: 'Tagliatelle', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 154, name: 'Tarwe', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 155, name: 'Volle rijst', category: 'Pasta en granen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 156, name: 'Aardbeienconfituur', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 157, name: 'Abrikozenconfituur', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 158, name: 'Beschuiten', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 159, name: 'Choco', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 160, name: 'Confituur', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 161, name: 'Corn flakes', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 162, name: 'Cruesli', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 163, name: 'Hagelslag', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 164, name: 'Honing', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 165, name: 'Maïswafels', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 166, name: 'Muesli', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 167, name: 'Pindakaas', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 168, name: 'Rijstwafels', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 169, name: 'Speculaaspasta', category: 'Ontbijt', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 170, name: 'Aardbeientaart', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 171, name: 'Appeltaart', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 172, name: 'Ciabatta', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 173, name: 'Donut', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 174, name: 'Eclair', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 175, name: 'Focaccia', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 176, name: 'Fruittaart', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 177, name: 'Meergranenbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 178, name: 'Picolo', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 179, name: 'Pistolets', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 180, name: 'Roggebrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 181, name: 'Rozijnenbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 182, name: 'Sandwich', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 183, name: 'Speltbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 184, name: 'Stokbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 185, name: 'Suikerbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 186, name: 'Volkorenbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 187, name: 'Witbrood', category: 'Bakkerij', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 188, name: 'Basilicum', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 189, name: 'Bieslook', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 190, name: 'Cajun', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 191, name: 'Cayennepeper', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 192, name: 'Chilipeper', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 193, name: 'Dille', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 194, name: 'Dragon', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 195, name: 'Jeneverbessen', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 196, name: 'Kaneel', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 197, name: 'Kerrie', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 198, name: 'Komijn', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 199, name: 'Koriander', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 200, name: 'Kruidnagel', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 201, name: 'Kurkuma', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 202, name: 'Muskaatnoot', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 203, name: 'Oregano', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 204, name: 'Paprikapoeder', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 205, name: 'Roze peper', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 206, name: 'Rozemarijn', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 207, name: 'Saffraan', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 208, name: 'Stoofvleeskruiden', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 209, name: 'Thijm', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 210, name: 'Vanillestokjes', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 211, name: 'Witte peper', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 212, name: 'Zout', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 213, name: 'Zwarte peper', category: 'Specerijen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 214, name: 'Ajuintjes', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 215, name: 'Ansjovis', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 216, name: 'Appelmoes', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 217, name: 'Augurken', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 218, name: 'Borlottibonen', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 219, name: 'Cassoulet', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 220, name: 'Fruitsalade', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 221, name: 'Kappertjes', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 222, name: 'Makreel', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 223, name: 'Palmharten', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 224, name: 'Perziken', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 225, name: 'Ravioli', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 226, name: 'Rode bonen', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 227, name: 'Sardine', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 228, name: 'Tomatenblokjes', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 229, name: 'Tomatenpuree', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 230, name: 'Tonijn', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 231, name: 'Veenbessen', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 232, name: 'Witte bonen', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 233, name: 'Witte bonen in tomatensaus', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 234, name: 'Zalm', category: 'Conserven', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 235, name: 'Bolognese', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 236, name: 'Ketchup', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 237, name: 'Mayonaise', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 238, name: 'Mosterd', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 239, name: 'Pesto', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 240, name: 'Sojasaus', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 241, name: 'Tabasco', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 242, name: 'Tikka Masala', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 243, name: 'Worcester saus', category: 'Sauzen', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 244, name: 'Bosvruchten', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 245, name: 'Chocolade-ijs', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 246, name: 'Citroensorbet', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 247, name: 'Erwten', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 248, name: 'Fishsticks', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 249, name: 'Frambozen', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 250, name: 'Frieten', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 251, name: 'Frisco\'s', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 252, name: 'Garnalen', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 253, name: 'Kipnuggets', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 254, name: 'Kroketten', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 255, name: 'Loempia\'s', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 256, name: 'Pizza', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 257, name: 'Raket', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 258, name: 'Roomijs', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 259, name: 'Sorbet', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 260, name: 'Spinazie', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 261, name: 'Vanille-ijs', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false},
    {id: 262, name: 'Zeevruchten', category: 'Diepvries', unit: '', image: '', note: '', shop: '',
      isFixedShop: false}
  ];
  categories: string[] = [
    'Fruit',
    'Groenten',
    'Beenhouwerij',
    'Vis',
    'Kaas',
    'Zuivel',
    'Pasta en granen',
    'Ontbijt',
    'Bakkerij',
    'Specerijen',
    'Conserven',
    'Sauzen',
    'Diepvries'
  ];
  units: string[] = [
    'g',
    'kg',
    'Stuk',
    'Pak',
    'Zakje',
    'Bakje',
    'Netje',
    'Pot',
    'Tros',
    'Bussel',
    'Kist',
    'Karton'
  ];

  constructor() { }

  getProducts(pCategory: String) {
    const result: Product[] = [];
    for (const product of this.products) {
      if (product.category === pCategory) {
        result.push(product);
      }
    }
    // Ref: AngularPipes_2018
    result.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    return result;
  }

  getCategories() {
    return this.categories;
  }

  getUnits() {
    return this.units;
  }
}
