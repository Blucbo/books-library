import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  let pipe: FilterPipe;
  const mockList = [
    {"id":1,"name":"DVD Studio Pro","author":"Louella Warbys","id_author":1,"genre":"Indonesian","content":"Phasellus in felis."},
    {"id":2,"name":"JAX-WS","author":"Johnath Adiscot","id_author":2,"genre":"Yaqui","content":"Etiam vel augue."},
    {"id":3,"name":"EEO","author":"Anni Lyst","id_author":3,"genre":"Hmong","content":"Morbi porttitor lorem id ligula."},
    {"id":4,"name":"Airlines","author":"Janelle Vitall","id_author":4,"genre":"Menominee","content":"Fusce consequat."},
    {"id":5,"name":"Linux System Administration","author":"Florina Passo","id_author":5,"genre":"Indonesian","content":"In hac habitasse platea dictumst."},
    {"id":6,"name":"PIM-DM","author":"Fredi Vernham","id_author":6,"genre":"Hmong","content":"Praesent id massa id nisl venenatis lacinia."},
    {"id":7,"name":"GIS Application","author":"Sim Lanning","id_author":7,"genre":"Menominee","content":"Nullam sit amet turpis elementum ligula vehicula consequat."},
    {"id":8,"name":"Restorative Justice","author":"Fay Grindley","id_author":8,"genre":"Hmong","content":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."},
    {"id":9,"name":"HACCP","author":"Napoleon Androlli","id_author":9,"genre":"Indonesian","content":"Integer ac leo."},
    {"id":10,"name":"Xenu","author":"Nevin Benger","id_author":10,"genre":"Hmong","content":"Integer tincidunt ante vel ipsum."}
  ];

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  });

  it('return list if prop="all" ', () => {
    const result = pipe.transform(mockList, 'genre', 'all');
    expect(result).toEqual(mockList);
  });

  it(`return list if prop=''(empty)`, () => {
    const result = pipe.transform(mockList, 'genre', '');
    expect(result).toEqual(mockList);
  });

  it('return list if list is empty', () => {
    const result = pipe.transform([], 'genre', 'anyValue');
    expect(result).toEqual([]);
  });

  pipe = new FilterPipe();
  const checkListContainGenre = (item, nameGenre) => {
    it('should return each item with same genre', () => {
      expect(item.genre).toEqual(nameGenre);
    });
  };
  const result = pipe.transform(mockList, 'genre', 'Indonesian');
  for (let i = 0; i < result.length; i++) {
    checkListContainGenre(result[i], 'Indonesian');
  }

});
