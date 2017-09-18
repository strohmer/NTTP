public static String stringReformatting(String s, int k) {
  String t = "";
  int a = 0;

  for (int i = s.length() - 1; i > -1; i--) {
    char c = s.charAt(i);
    if (c != '-') {
      t = c + t;
      a++;
      if (a == k && i != 0) {
        a = 0;
        t = "-" + t;
      }
    }
  }
  return t;
}
