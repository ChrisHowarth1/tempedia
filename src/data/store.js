import { writable, derived } from "svelte/store";

export const apiData = writable ([]);
export const typeData = writable ([]);

//pulling just a list of temtem names in order

export const temNames = 
    derived(apiData, ($apiData) => {
        if ($apiData){
            return $apiData.map(name => name.name);
          }
        return [];
    });

//pulling a list of types and icons for respective types

export const temTypes = 
derived(typeData, ($typeData) => {
    if ($typeData){
      return $typeData.map(name => name.name);
    }
    return [];
});