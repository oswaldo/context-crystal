class Ccrystal < Formula
  desc "Deterministic context preservation, DAG provenance, and runtime orchestration"
  homepage "https://github.com/oswaldo/context-crystal"
  version "0.1.0-test"
  license "Apache-2.0"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-aarch64.tar.gz"
      sha256 "0000000000000000000000000000000000000000000000000000000000000000"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-x86_64.tar.gz"
      sha256 "0000000000000000000000000000000000000000000000000000000000000000"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-aarch64.tar.gz"
      sha256 "0000000000000000000000000000000000000000000000000000000000000000"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-x86_64.tar.gz"
      sha256 "2c3a5c25fc61b6e14c6f7ba49a9f120d9ae5e9a323bdbcee45f6fa8c1959b57d"
    end
  end

  def install
    bin.install "ccrystal"
  end

  test do
    assert_match "Context Crystal CLI", shell_output("#{bin}/ccrystal --help")
  end
end
