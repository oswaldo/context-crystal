class Ccrystal < Formula
  desc "Deterministic context preservation, DAG provenance, and runtime orchestration"
  homepage "https://github.com/oswaldo/context-crystal"
  version "1.2.1"
  license "MIT"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-aarch64.tar.gz"
      sha256 "dc51d5959430a9acd0fe2073fe4e0f9e569f2848e8491405f97d7989ba4a6138"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-x86_64.tar.gz"
      sha256 "68ba92a9ddad18bf607dbe9c8fb7bbe337106f81589a5697898f57fbe2c8d654"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-aarch64.tar.gz"
      sha256 "51a67a5635e688d571e3e84ce567b070016eb363b5bb55fdd709f87ac3637868"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-x86_64.tar.gz"
      sha256 "c1bfbaa7b126b14d5b1843aee1b5b74bce6c5620b048e2aa44b6daa1e1112e62"
    end
  end

  def install
    bin.install "ccrystal"
  end

  test do
    assert_match "Context Crystal CLI", shell_output("#{bin}/ccrystal --help")
  end
end
