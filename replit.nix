{ pkgs }: {
	deps = [
		pkgs.openssh_with_kerberos
        pkgs.sudo
        pkgs.nodejs-18_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
	];
}
