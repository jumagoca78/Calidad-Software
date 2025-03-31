/*
 * Una clase que busca el número más grande de un arreglo
 */

public class ElMasGrande {
    
    public static int elMasGrande(int[] arr) {
        int max = Integer.MAX_VALUE;
        for (int i = 1; i < arr.length-1; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;


    }
}
