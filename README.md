Dettagli dell'implementazione
Utilizzo vari metodi degli array come map, filter, sort, splice e push per gestire ciascuna fase del torneo.

Torneo Boolkaichi
Il torneo Boolkaichi si svolgerà in 5 fasi principali:

Fase 1 - Scelta dell'arma
Ogni combattente sceglierà casualmente un'arma dalla lista disponibile. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

Fase 2 - Allenamento
Ogni combattente si allenerà, incrementando la sua potenza con un moltiplicatore casuale tra 1 e 100.

Fase 3 - Qualificazione
Escluderemo dal torneo i combattenti che, dopo l'allenamento, non avranno raggiunto una potenza di almeno 2000.

Fase 4 - Combattimento
I combattimenti avverranno tra combattenti in coppie consecutive. Ogni scontro vedrà vincitore il combattente con la potenza maggiore. In caso di parità, vincerà chi è primo nell'elenco. Se il numero di combattenti è dispari, verrà aggiunto un "Robot" con potenza 4000.

Fase 5 - Premiazione
I vincitori degli scontri combatteranno ulteriormente fino a determinare i primi tre classificati, ordinati in base alla potenza decrescente.

