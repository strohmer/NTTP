public static void stringPermutations(String s) {
		
		stringPermutationsHelp("",s);
	}
	
	public static void stringPermutationsHelp(String s, String t) {
		if (t == "") {
			System.out.println(s);
		} else {
			for (int i = 0; i < t.length(); i++) {
				stringPermutationsHelp(s + t.charAt(i), t.substring(0, i) + t.substring(i + 1, t.length()));
			}
		}
	}