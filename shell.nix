let
    pkgs = import <nixpkgs> {};
    nodejs = pkgs.nodejs-14_x;
    nodejsPkgs = pkgs.nodePackages.override {
        nodejs = nodejs;
    };
in
    pkgs.stdenv.mkDerivation {
        name = "sketch.d.ts";
        buildInputs = [
            nodejs
            nodejsPkgs.yarn
        ];
    }
