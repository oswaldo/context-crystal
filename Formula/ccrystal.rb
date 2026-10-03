class Ccrystal < Formula
  desc "Deterministic context preservation, DAG provenance, and runtime orchestration"
  homepage "https://github.com/oswaldo/context-crystal"
  version "1.2.0"
  license "MIT"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-aarch64.tar.gz"
      sha256 "99dbb4fe64aed3a54e5474c2647ae509004b83dbe1b328c661898bf6ef794123"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-x86_64.tar.gz"
      sha256 "59e38dbd3fce0df3e36e9920963c2795a5310355c7b1e4cfefa5a6cd2a67a9f4"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-aarch64.tar.gz"
      sha256 "696278392de6d93c3ea9f98d0a27ae9d34b7a2e4574ebe8b2a1ebe8d5457bcc5"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-x86_64.tar.gz"
      sha256 "2d8b8ec12de5c5b88a2c9c0a9681ba0120d7d5767a27e2ba7d4a5d442dc54080"
    end
  end

  def install
    bin.install "ccrystal"
  end

  test do
    assert_match "Context Crystal CLI", shell_output("#{bin}/ccrystal --help")
  end
end
