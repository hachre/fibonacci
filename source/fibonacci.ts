class Fibonacci {
	/* 	
			get() - finds numbers in the Fibonacci sequence and stores them to an array	
				required parameters:
					- max: defines after how many found numbers we should call it quits
				optional parameters:
					- prev1: stores very previous value in the sequence so we can resume in recursion
					- prev2: stores the 2nd previous value in the sequence
					- array: stores the values of the sequence that have been found so far
	*/
	static get(max: number, prev1 = 0, prev2 = 0, array: number[] = []): number[] {
		// Exit if max has reached 0
		if (max === 0) { return array; }

		// The result is the previous two numbers added up
		var result = prev1 + prev2;
		array.push(result);
		
		// Store the previous two results
		prev2 = prev1;
		prev1 = result;

		// First run, we are cheating here, to get over the 0 state.		
		if (result === 0) { prev1 = 1; }
	
		// Call ourselves again to find the next result in the sequence	
		return this.get(max - 1, prev1, prev2, array);
	}
	
	// Simple array print function
	static print(val: number[]) {
		for (var i = 0; i < val.length; i++) {
			console.log("%s: %s", i, val[i]);
		}
	}
}

Fibonacci.print(Fibonacci.get(20));