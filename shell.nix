let
    pkgs = import <nixpkgs> {};
in
    pkgs.stdenv.mkDerivation {
        name = "sketch.d.ts";
        buildInputs = [
            pkgs.nodejs-14_x
        ];
    }
