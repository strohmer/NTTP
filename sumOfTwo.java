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

public static boolean sumOfTwo2(int a[], int b[], int v) {
	Arrays.sort(a);
	Arrays.sort(b);
	int x = 0;
	int y = b.length - 1;

	while ((x < b.length) && (y > -1)) {
		if (a[x] + b[y] == v) {
			return true;
		} else if (a[x] + b[y] > v) {
			y--;
		} else if (a[x] + b[y] < v) {
			x++;
		}
	}
	return false;
}
