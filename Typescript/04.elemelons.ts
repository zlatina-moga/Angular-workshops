const elemelons = (): void => {
    abstract class Melon {
        protected element: string;
        public weight: number;
        public melonSort: string;
        elementIndex: number;
    
        constructor (weight: number, melonSort: string) {
            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = weight * melonSort.length;
        }

        public toString(): void {
            console.log(`Element: ${this.element}`)
            console.log(`Sort: ${this.melonSort}`)
            console.log(`Element Index: ${this.elementIndex}`)
        }
    }

    class Watermelon extends Melon {       
        constructor (weight: number, melonSort: string){
            super(weight, melonSort)
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor (weight: number, melonSort: string){
            super(weight, melonSort);
            this.element = 'Fire';
        }
        
    }

    class Earthmelon extends Melon {
        constructor (weight: number, melonSort: string){
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor (weight: number, melonSort: string){
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Airmelon {
        public elements: Array<string> = ['Water', 'Fire', 'Earth', 'Air'];

        morph(){
            let index: number = this.elements.indexOf(this.element);
			index = index >= this.elements.length ? 0 : index;
            this.element = this.elements[index]
        }
    }
}


