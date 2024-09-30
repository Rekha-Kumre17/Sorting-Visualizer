import { waitforme } from "../components/waitForMe";
let delay = 30;
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;   
}

export async function SelectionSort(ele) {
    for(let i=0;i<ele.length;i++){
        let min_index = i;

        ele[i].style.background = 'blue';
        for(let j = i+1 ; j<ele.length;j++){
            ele[j].style.background = 'red';
            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    ele[min_index].style.background = 'pink';
                }
                min_index = j;
            }
            else {
                ele[j].style.background = 'pink';
            }
        }
        await waitforme(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background = 'pink';
        ele[i].style.background = 'skyblue';
    }
}