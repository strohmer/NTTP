public static boolean sumOfTwo(int a[], int b[], int v) {
		for (int x = 0; x < a.length; x++) {
			for (int y = 0; y < b.length; y++) {
				if (a[x] + b[y] == v) {
					return true;
				}
			}
		}
		return false;
		//O(ab)
}
