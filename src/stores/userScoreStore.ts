import type { userScoreState } from '@/Interfaces/store.Type';
import { defineStore } from 'pinia';


export const useScoreStore = defineStore('userScore', {
  state: (): userScoreState => ({
    TotalChoice: 0,
    UserScore: 0,
  }),

  actions: {
    updateUserScore(isMatch:boolean) {
      this.TotalChoice =+1;
      if (isMatch)
        this.UserScore =+1;
    }    
  }
})
